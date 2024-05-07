import { Card, Group, Image, Text, NavLink, SimpleGrid } from "@mantine/core";
import "../Styles/About.css";
import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();
  const { width } = useViewportSize();

  return (
    <div className="about">
      <h1 className="textabout">{t("About Us")}</h1>
      <p className="textabout">
        {t(
          "We are three Ironhackers passionate about Web Development. Check our profiles below!"
        )}
      </p>
      <SimpleGrid mb="2rem" cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://media.licdn.com/dms/image/D4E03AQGgrHELLtfxcQ/profile-displayphoto-shrink_800_800/0/1714379782245?e=1720656000&v=beta&t=qhUR4vXZRjqjWUPW7bGF3ggdDBo5pBSV_sUkNiLLUyU"
                height="400vw"
                width="33vw"
                alt="Item picture"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Emiliano Foti</Text>
            </Group>

            <NavLink
              href="https://github.com/emi-fto"
              label="GitHub"
              leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
              target="_blank"
            />
            <NavLink
              href="https://linkedin.com/in/emiliano-foti-345a11a4"
              label="LinkedIn"
              leftSection={<IconBrandLinkedin size="1rem" stroke={1.5} />}
              target="_blank"
            />
          </Card>
        </div>
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://media.licdn.com/dms/image/D4E35AQGeDIm-CkZnjg/profile-framedphoto-shrink_800_800/0/1706967120887?e=1715716800&v=beta&t=FphUyEKU63-K0ygG70DffK6FoDzOfngKshNRmEAFoQQ"
                height="400vw"
                width="33vw"
                alt="Item picture"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>János Sitku</Text>
            </Group>

            <NavLink
              href="https://github.com/sitkujanos86"
              label="GitHub"
              leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
              target="_blank"
            />
            <NavLink
              href="https://linkedin.com/in/sitkujanos86"
              label="LinkedIn"
              leftSection={<IconBrandLinkedin size="1rem" stroke={1.5} />}
              target="_blank"
            />
          </Card>
        </div>
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://media.licdn.com/dms/image/D5603AQFLWADkC-nunQ/profile-displayphoto-shrink_800_800/0/1709063106973?e=1717632000&v=beta&t=mvshmaS9j_luMbWO9TIAw1z3cLGslQU03-CXuOzltVE"
                height="400vw"
                width="33vw"
                alt="Item picture"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Yiman Huang</Text>
            </Group>

            <NavLink
              href="https://github.com/VivianeHuang2022"
              label="GitHub"
              leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
              target="_blank"
            />
            <NavLink
              href="https://www.linkedin.com/in/yiman-h-389946210/"
              label="LinkedIn"
              leftSection={<IconBrandLinkedin size="1rem" stroke={1.5} />}
              target="_blank"
            />
          </Card>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default AboutPage;
