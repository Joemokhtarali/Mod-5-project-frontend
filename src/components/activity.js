// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../../src/index.css'


// const Activity = (props) => { 

//     const { name, image, id, address, index ,date} = props.activity
//     return (
//         <div>
//             <div className='activity' id={`activity-${index}`}>
//                 <Link to={`/activities/${id}`}><img className='img' src={image} alt={name} /></Link>
//             </div>
//             <p className='info' style={{ textAlign: "center" }}>{name}
//                 <br />
//                 {date}
//             </p>
//         </div>
//     )
// }


// export default Activity

import React from 'react';
import ActivityPage from './activityPage'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

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
    const classes = useStyles();
    // console.log(props.history);
    
    const { name, image, id, address, index, date, about } = props.activity

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
                    onClick={() => props.history.push(`/activities/${id}`)}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about.split(" ").slice(0, 20).join(' ')}
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
