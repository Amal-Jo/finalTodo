import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'


const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            height:'100vh',
        
            
        },
        image: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
        // grid:{
        //     alignItems:'center'
        // },
        paper:{
            display:'flex',
            flexDirection:'column',
            margin:theme.spacing(8,4),
            alignItems:'center'
            
        },
        avatar:{
            margin:theme.spacing(1),
            backgroundColor: theme.palette.secondary.main

        },
        form:{
            width:'100%',
            margin:theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3,0,2),
          }, 
          signup:{
              margin:theme.spacing(2,0,2),
              
          } 


    })

)
export default useStyles