import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export function UsernameNote({ userFocus, user, validName }) {
  return (
    <p
      className={userFocus && user && !validName ? "instructions" : "offscreen"}
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      4 to 24 characters.
      <br />
      Must begin with a letter.
      <br />
      Letters, numbers, underscores, hyphens allowed.
    </p>
  );
}

export function PasswordNote({ passwordFocus, validPassword }) {
  return (
    <p
      className={passwordFocus && !validPassword ? "instructions" : "offscreen"}
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      8 to 24 characters.
      <br />
      Must include uppercase and lowercase letters, a number and a special
      character.
      <br />
      Allowed special characters: <span aria-label="exclamation mark">
        !
      </span>{" "}
      <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{" "}
      <span aria-label="dollar sign">$</span>{" "}
      <span aria-label="percent">%</span>
    </p>
  );
}

export function ConfirmPasswordNote({ matchFocus, validMatch }) {
  return (
    <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle} />
      Must match the first password input field.
    </p>
  );
}
