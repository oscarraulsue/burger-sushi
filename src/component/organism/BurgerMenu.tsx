import {  Dropdown, Avatar, Text, Grid, User  } from "@nextui-org/react";
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import Image from "next/image";


export const BurgerMenu = () => {
  return (
      <Grid>
        <Dropdown disableAnimation placement="bottom-left">
          <Dropdown.Trigger>
            {/* <Avatar
              bordered
              css={{bg:'$secondary'}}
              size="md"
              as="button"
              color="secondary"
              src="/icons/burgerMenuIcon.png"
            /> */}
            <LunchDiningOutlinedIcon sx={{color:'#ffbc0d', fontSize:38, mb: -1}} />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
  );
}
  
