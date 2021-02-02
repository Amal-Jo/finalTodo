import  jwt from 'jsonwebtoken'

const authCheck=(req:any,res:any,next:any)=>{
  
try {
    // const authHeader = req.headers['authorization']
    // const token = authHeader.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    const token=req.headers('authorization')
    // //check for token
    if (!token) {
      res.status(500).json({msg:'Authentication failed!'});
    }

    // Verify token
    const decodedToken :any= jwt.verify(token, 'SECRET_KEY');
    // Add user from payload
    req.user = decodedToken
    next();
  } catch (err) {
    console.log(err)
    return res.status(500).json({msg:"Token is not valid"})
  }
}
export default authCheck