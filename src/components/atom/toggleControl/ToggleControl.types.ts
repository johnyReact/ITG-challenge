export default interface ToggleControlProps {
    label: string;
    name: string;
    initialValue?: string;
    isChecked: string;
    handleToggle: (name: string, value: string) => void;
}
