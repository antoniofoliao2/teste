import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  /**
   * getUsuario
   */
  public getUsuario(): Usuario
  
  {
      let usuario = new Usuario()
      usuario.nome = "Antonio"
      usuario.email = "tonhoalvess@bol.com.br"
      return usuario

  }

  /**
   * listaUsuario
   */
  public listaUsuario(): Usuario[] 
  {
    return [ 
      {
        nome:"Antonio",
        email:'antoniofoliao2@gmal.com'
      },
      {
        nome:"Jose",
        email:"jose@gmal.com"
      },
      {
        nome:"Maria",
        email:"maria@gmal.com"
      }
    ]
  }
}
