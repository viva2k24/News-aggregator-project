import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    margin: 5,
    height: 260,
    background: 'lightgrey',
    borderRadius: 1,
    border: "4px solid grey",
    fontFamily: "sans-serif",
    boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.9)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const CardList = ({ articles }) => {
  const classes = useStyles();

  const truncate = (text, limit) => {
    if (text && text.length > limit) {
      return `${text.substring(0, limit)}...`;
    }
    return text;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {articles.length > 0 && articles.map((article) => (
        <Button
          key={article.title}
          component="a"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className={classes.root}>
            <CardHeader
              title={truncate(article.title, 120)}
              subheader={article.publishedAt}
              style={{ fontFamily: 'Times New Roman', color: '#000' }}
            />
            <CardMedia className={classes.media} image={article.urlToImage} title={article.title} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {truncate(article.description, 120)}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      ))}
    </div>
  );
};

export default CardList;
