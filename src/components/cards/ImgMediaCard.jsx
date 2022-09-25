import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block"
  },
});

export default function ImgMediaCard({ label, image, url }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <AccountCircleIcon style={{ fontSize: 150 }} />
          <Typography gutterBottom variant="h5" component="h2">
            already ad EvnCrawl
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}