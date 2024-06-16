import { Button } from "@/components/ui/button"
import React from 'react';

interface ButtonProps {
  icon?: any;
  text?: String;
  onClick?: () => void;
}
const CustomBtn: React.FC<ButtonProps> = ({icon, text}) => {
  return (
    <Button variant={'customprimary'} className="w-full flex justify-start flex-row gap-2">
        {icon} {text}
    </Button>
  );
};


export default CustomBtn;