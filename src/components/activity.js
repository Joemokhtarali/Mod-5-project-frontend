import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '10px'
    },
    media: {
        height: 300,
    },
});
 
export default function Activity(props) {
    let history = useHistory();
    const classes = useStyles();
    // console.log(props.history);
    
    const { name, image, id, date, about } = props.activity

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/* <div className={classes.media} id={`activity-${index}`}>
                    <Link to={`/activities/${id}`}><img className={classes.media} src={image} alt={name} /></Link>
                </div> */}
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                    onClick={() => history.push(`/activities/${id}`)}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6" style={{ textAlign: 'center' }}>
                        {date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about ? about.split(" ").slice(0, 20).join(' ') : about}......more
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
          
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
            </CardActions>
        </Card>
    );
}
