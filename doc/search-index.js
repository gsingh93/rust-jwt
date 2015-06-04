var searchIndex = {};
searchIndex['jwt'] = {"items":[[0,"","jwt","",null,null],[3,"Token","","",null,null],[12,"header","","",0,null],[12,"claims","","",0,null],[0,"error","","",null,null],[4,"Error","jwt::error","",null,null],[13,"Format","","",1,null],[13,"Base64","","",1,null],[13,"Decode","","",1,null],[13,"Encode","","",1,null],[13,"Json","","",1,null],[13,"Parse","","",1,null],[13,"Utf8","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"frombase64error"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"decodererror"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"encodererror"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"errorcode"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"parsererror"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"fromutf8error"}],"output":{"name":"error"}}],[0,"header","jwt","",null,null],[3,"Header","jwt::header","",null,null],[12,"typ","","",2,null],[12,"alg","","",2,null],[4,"HeaderType","","",null,null],[13,"JWT","","",3,null],[4,"Algorithm","","",null,null],[13,"HS256","","",4,null],[11,"encode","","",2,{"inputs":[{"name":"header"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",2,{"inputs":[{"name":"header"},{"name":"__d"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"header"},{"name":"header"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"header"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",3,{"inputs":[{"name":"headertype"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",3,{"inputs":[{"name":"headertype"},{"name":"__d"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"headertype"},{"name":"headertype"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"headertype"},{"name":"headertype"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"headertype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",4,{"inputs":[{"name":"algorithm"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",4,{"inputs":[{"name":"algorithm"},{"name":"__d"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"algorithm"},{"name":"algorithm"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"algorithm"},{"name":"algorithm"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"algorithm"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[0,"claims","jwt","",null,null],[3,"Claims","jwt::claims","",null,null],[12,"reg","","",5,null],[12,"private","","",5,null],[3,"Registered","","",null,null],[12,"iss","","",6,null],[12,"sub","","",6,null],[12,"aud","","",6,null],[12,"exp","","",6,null],[12,"nbf","","",6,null],[12,"iat","","",6,null],[12,"jti","","",6,null],[11,"eq","","",5,{"inputs":[{"name":"claims"},{"name":"claims"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"claims"},{"name":"claims"}],"output":{"name":"bool"}}],[11,"default","","",5,{"inputs":[{"name":"claims"}],"output":{"name":"claims"}}],[11,"fmt","","",5,{"inputs":[{"name":"claims"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"encode","","",6,{"inputs":[{"name":"registered"},{"name":"__s"}],"output":{"name":"result"}}],[11,"decode","","",6,{"inputs":[{"name":"registered"},{"name":"__d"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"registered"},{"name":"registered"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"registered"},{"name":"registered"}],"output":{"name":"bool"}}],[11,"default","","",6,{"inputs":[{"name":"registered"}],"output":{"name":"registered"}}],[11,"fmt","","",6,{"inputs":[{"name":"registered"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",5,{"inputs":[{"name":"claims"},{"name":"registered"}],"output":{"name":"claims"}}],[11,"from_base64","","",5,{"inputs":[{"name":"claims"},{"name":"str"}],"output":{"name":"result"}}],[11,"to_base64","","",5,{"inputs":[{"name":"claims"}],"output":{"name":"result"}}],[8,"Component","jwt","",null,null],[10,"from_base64","","",7,{"inputs":[{"name":"component"},{"name":"str"}],"output":{"name":"result"}}],[10,"to_base64","","",7,{"inputs":[{"name":"component"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[{"name":"token"}],"output":{"name":"token"}}],[11,"fmt","","",0,{"inputs":[{"name":"token"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"token"},{"name":"h"},{"name":"c"}],"output":{"name":"token"}}],[11,"parse","","Parse a token from a string.",0,{"inputs":[{"name":"token"},{"name":"str"}],"output":{"name":"result"}}],[11,"verify","","Verify a from_base64d token with a key and a given hashing algorithm.\nMake sure to check the token's algorithm before applying.",0,null],[11,"signed","","Generate the signed token from a key and a given hashing algorithm.",0,null],[11,"eq","","",0,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}]],"paths":[[3,"Token"],[4,"Error"],[3,"Header"],[4,"HeaderType"],[4,"Algorithm"],[3,"Claims"],[3,"Registered"],[8,"Component"]]};
initSearch(searchIndex);