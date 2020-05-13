import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 345,
        padding: '10px',
        height: 500,
    },
    media: {
        height: 300,
    },
});

function parseDate(input) {
    // var parts = input.match(/(\d+)/g);
    // // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    // return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
    let date = input.split('-')
    if (date.length > 1) {
        return date[0] + '/' + date[1] + '/' + date[2].slice(0, 2)
    }
    return input
}
 
export default function Activity(props) {
    let history = useHistory();
    const classes = useStyles();
    // console.log(props.history);

    const { name, image, id, date, about } = props.activity

    return (
        <Card className={classes.root}>
            <CardActionArea>
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
                        {parseDate(date)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {about ? about.split(" ").slice(0, 20).join(' ') : about}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
