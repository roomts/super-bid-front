import styles from "./input.module.css";

interface InputProps {
  type?: "text" | "number";
  text?: string;
  value: any;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  valueChange?: (valor: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`${styles.box} ${props.className}`}>
      {props.text ? <label className="mb-2">{props.text}</label> : false}
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        onChange={(e) => props.valueChange?.(e.target.value)}
        className={`${styles.input}         ${
          props.valueChange ? "" : "focus:bg-white"
        }
        `}
      />
    </div>
  );
}
