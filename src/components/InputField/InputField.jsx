import { useField } from "formik";
export default function InputField({ label, ...props }) {
  const [field] = useField(props);
  return (
    <label>
      <input {...field} {...props} />
      {label}
    </label>
  );
}
