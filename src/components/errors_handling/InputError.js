import { React } from 'react';
import styles from './InputError.module.scss';

function InputError(data) {
  return(
    <div className={styles.input_error}>
      { data.error && (
        data.error_message
      ) }
    </div>
)
}

export default InputError;
