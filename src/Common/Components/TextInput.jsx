import Box from '@mui/material/Box';
import { TextField }from '@mui/material';


export default function TextInput(props) {

  const {
    label = 'default label',
    value = '',
    multiline = true,
    handleChange,
    variant = 'outlined',
    boxProps,
    textFieldProps,
  } = props;

  return (
    <Box {...boxProps}>
      <TextField
        label={label}
        multiline={multiline}
        value={value}
        onChange={handleChange}
        variant={variant}
        helperText='help here'
        {...textFieldProps}
      />
    </Box>
  );
}
