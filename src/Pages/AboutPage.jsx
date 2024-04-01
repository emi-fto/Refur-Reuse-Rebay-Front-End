import { Card, Group, Image, Text, NavLink, SimpleGrid } from "@mantine/core";
import "../Styles/About.css";
import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

function AboutPage() {
  const { width } = useViewportSize();

  return (
    <div className="about">
      <h1 className="textabout">About us</h1>
      <p className="textabout">
        We are three Ironhackers passionate about Web Development. <br />
        Check our profiles below!
      </p>
      <SimpleGrid mb="2rem" cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://media.licdn.com/dms/image/D4D03AQEceePNoAFgjg/profile-displayphoto-shrink_800_800/0/1705564821700?e=1717632000&v=beta&t=Ee8Citd-TBsXE2N23-0KXrfx1IEgdfyHOEgWYUq8m-Q"
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
                src="https://media.licdn.com/dms/image/D4E35AQGeDIm-CkZnjg/profile-framedphoto-shrink_800_800/0/1706967120887?e=1712584800&v=beta&t=0VeAtgAyGnqcHzSNQc8--8bW4Qrxk6GlMecCdGpOvzg"
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
