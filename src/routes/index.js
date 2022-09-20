import { Router } from 'express'
const router = Router()
router.get('/', (req, res) => {
  res.render('index', { title: 'primera_pagina' })
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact page' })
})
export default router;
