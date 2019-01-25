# Learn-BackEnd-Nodejs

### Rotas da api

#### Rotas User

*get '/user/:id'* =>  Busca user pelo userId

*get '/user'*     =>  Busca todos os users

*put '/user/:id'* =>  Atualiza user pelo userId

*post '/user'*    =>  Adciona novo user

    post body req 

    name: 
      type: STRING,
      allowNull: false,
    
    username: 
      type: STRING,
      allowNull: false,
    
    password: 
      type: STRING,
      allowNull: false,
    


#### Routes Roles

*get '/role/:id'* =>  Busca role pelo roleId

*get '/role'*     =>  Busca todas as roles

*put '/role/:id'* =>  Atualiza role pelo roleId

*post '/role'*    =>  Adciona nova role

    post body req 

    name: 
      type: STRING,
      allowNull: false,
    
    description: 
      type: STRING max char 500
      allowNull: false,
        

#### Routes Link entre user e role

*delete '/link-user-role/:id'*        =>  Delete o link pelo linkId

*get '/link-user-role/user/:userId'*  =>  Busca todos os links do user

*get '/link-user-role/role/:roleId'*  =>  Busca todas os links da role

*get '/link-user-role/:id'*           =>  Busca link específico

*get '/link-user-role/'*              =>  Busca todos os links

*post '/link-user-role'*              =>  Adciona novo link

  post body req 

    userId: 
      type: STRING,
      allowNull: false,
    
    roleId: 
      type: STRING,
      allowNull: false,