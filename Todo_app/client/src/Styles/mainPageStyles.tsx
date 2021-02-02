import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'




const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            height:'100vh',
      
        },
        header:{
            flexGrow:1
        },
        image: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
             
           
          },
          title: {
            flexGrow: 1
          }
    })
)
export default useStyles