import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardRestauranter() {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          minHeight="100%"
        >
          <Grid item minWidth="100%">
            <CardMedia
              component="img"
              alt="Montenegro"
              image={require('../images/tintinMat.png')}
            />
            <CardContent sx={{ minHeigth: '40%' }}>
              <Typography gutterBottom variant="h4" component="div">
                #4 Restauranter
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Vi er sultne! Hva med et gavekort på en restaurant?
              </Typography>
            </CardContent>
          </Grid>

          <Grid item>
            <CardActions>
              <IconButton
                href="https://www.nrk.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" size="large" color="secondary">
                  <VolunteerActivismRoundedIcon />
                  MANGLER
                </Button>
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
