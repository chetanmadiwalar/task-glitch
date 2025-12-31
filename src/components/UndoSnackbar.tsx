import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  const handleUndo = () => {
    onUndo();
    onClose(); 
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    // We intentionally close on ALL reasons, including clickaway
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      message="Task deleted"
      onClose={handleClose}
      action={
        <Button
          color="secondary"
          size="small"
          onClick={handleUndo}
        >
          Undo
        </Button>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}
