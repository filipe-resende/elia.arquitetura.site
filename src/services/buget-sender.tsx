import axios from 'axios'
import { IForms } from '../interfaces/IForm'

const BASE_URL = 'https://func-elia-instagram-api.azurewebsites.net'
const CODE = '?code=6-Y8A-zr4w0wOH7i20ukYdpkYt2p1MQAaHHRT6biM6VmAzFuqADKWg=='
export const enviarMensagem = async (clientForm: IForms): Promise<void> => {
  try {
    const form = new FormData()
    const files = clientForm.images
    for (let i = 0; i < files.length; i++) {
      form.append('images', files[i])
    }

    for (const key in clientForm) {
      form.append(key, clientForm[key])
    }

    await axios.post(`${BASE_URL}/api/send-email${CODE}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (error) {
    throw new Error('Ocorreu um erro ao enviar a mensagem.')
  }
}
