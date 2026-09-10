import bcrypt, { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from '../config/database.js'

export const gerarHashSenha = async (senha) => bcrypt.hash(senha, 10)
export const compararSeenha = async (senha, hash) => {bcrypt.compare(senha, hash)}

export const gerarToken = (payload) => jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn: '8h'}
)