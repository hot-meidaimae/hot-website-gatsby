import React from 'react';
import Img from "gatsby-image"
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import MapIcon from '@material-ui/icons/Map';
import Tooltip from '@material-ui/core/Tooltip';
import styled from "styled-components";

const FabBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const MapDialogModal = (props) => {
  return (
    <Dialog onClose={props.handleClose} open={props.open} fullWidth>
      <DialogTitle>店内マップ</DialogTitle>
      <Img fluid={props.floorMapImage.childImageSharp.fluid} />
    </Dialog>
  );
}

export default function MapDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip onClick={handleClickOpen}>
          <FabBox>
            <Fab color="primary">
                <MapIcon />
            </Fab>
          </FabBox>
        </Tooltip>
      <MapDialogModal floorMapImage={props.floorMapImage} handleClose={handleClose} open={open} />
    </div>
  );
}