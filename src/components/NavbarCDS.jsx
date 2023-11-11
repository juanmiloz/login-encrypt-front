import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function NavbarCDS() {
  return (
    <Navbar isBordered isBlurred>
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGIN ENCRYPT</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
