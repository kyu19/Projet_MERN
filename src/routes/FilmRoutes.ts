import {Router, Request, Response} from 'express'
import Director, {IDirector} from '../models/Realisateur'

const router = Router();


let directors: IDirector[] = []


router.get('/', (req: Request, res: Response) => {
    
})








// router.get('/:id', (req: Request, res: Response) => {
//       const livre = livres.find(l => l.id === parseInt(req.params.id))
//       if (!livre) return res.status(404).json({message: 'livre non trouvé'})
//       res.status(200).json(livre)
// })


router.post('/', (req: Request, res: Response) => {
    const livre = req.body
    directors.push(livre)
    res.status(201).json(livre)
})


router.put('/:id', (req: Request, res: Response) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({message: 'livre non trouvé'})
    directors.splice(index, 1, req.body)
})


router.delete('/:id', (req: Request, res: Response) => {
    const index = directors.findIndex(l => l.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({message: 'livre non trouvé'})
    directors.splice(index, 1)
})


export default router