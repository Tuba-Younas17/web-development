import { body, validationResult } from "express-validator";

export const validSignUpReq = [
    body('name', 'Name must be alteast of 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    
]
export const validationSignUpReq = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
 }