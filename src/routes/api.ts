import {Router} from 'express'

//importar o apiController
import * as apiController from '../controllers/apiController'

const router = Router()

//coloque o API controller aqui 
router.get('/ping',apiController.ping)
router.get('/random',apiController.random)
router.get('/nome/:nome',apiController.nome)

//criando endpoint frases
router.post('/frases',apiController.createPhrase)

//essa rota será apenas para ler a frase (ela é semelhante ao POST)
router.get('/frases',apiController.listPhrases)
//pegando uma frase específica
router.get('/frase/:id',apiController.getPhrase)

router.put('/frase/:id', apiController.updatePhrase)

router.delete('/frase/:id',apiController.deletePhrase)

export default router
