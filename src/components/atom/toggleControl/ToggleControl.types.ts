export default interface ToggleControlProps {
    label: string;
    name: string;
    isChecked: boolean;
    initialValue?: boolean;
    handleToggle: (name: string, value: boolean) => void;
}
