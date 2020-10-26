import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import flashCardStyles from "./flashCard.style";

import { useState } from "react";

import { Card, Grid, IconButton, Typography } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";

FlashCard.propTypes = {};

function FlashCard(props) {
  const [isflip, setIsflip] = useState(false);
  const handleChangeFlip = () => {
    setIsflip(!isflip);
  };
  const classes = flashCardStyles();
  return (
    <Grid container item spacing={1} direction="row" className="mb-3">
      <Grid item sm={12} md={4} lg={4} className={classes.left}>
        <Card>
          <div className="p-3">
            <h4>The car park</h4>
            <Typography className={classes.pos} color="textSecondary">
              noun
            </Typography>
            <span>
              <span className={classes.textSize18}>
                Phần{" "}
                <IconButton>
                  <VolumeUpIcon />
                </IconButton>
                phát âm
                <IconButton>
                  <VolumeUpIcon />
                </IconButton>
              </span>
            </span>
          </div>
        </Card>
      </Grid>

     

      <Grid item sm={12} md={8} lg={8} className={classes.right}>
        <Card onClick={handleChangeFlip} className={classes.cardRight}>
          <ReactCardFlip isFlipped={isflip} flipDirection="vertical">
            <div className="">
              <span variant="body1" component="p">
                <b>- Example:</b>
                Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi
                nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc
                rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ cuộc rồi nhé! Bỏ
                cuộc rồi nhé!
              </span>
            </div>
            <div className="">I left the car in the car park.</div>
          </ReactCardFlip>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FlashCard;
