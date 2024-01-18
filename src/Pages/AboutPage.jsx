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
      <SimpleGrid
        className="aboutGrid"
        cols={width > 1200 ? 3 : width > 800 ? 2 : 1}
      >
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://media.licdn.com/dms/image/D4D03AQEceePNoAFgjg/profile-displayphoto-shrink_800_800/0/1705564821700?e=1710979200&v=beta&t=P7xxIq6CMrVGS7vjLW7QyzAgeApyqsNFAfEj2-QoC_w"
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
                src="https://media.licdn.com/dms/image/D4E03AQEhC8j0pQnEiw/profile-displayphoto-shrink_800_800/0/1704892915029?e=1710374400&v=beta&t=5uSTiidT8Bx4GPO6ySZSki2nFxk1SM7qcZrVpe7i0pU"
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
                src="https://media.licdn.com/dms/image/D4E03AQFm94XNsp0H-A/profile-displayphoto-shrink_200_200/0/1678376400608?e=1710374400&v=beta&t=O0amIXts5OlTNADF6ZrzBUZDvATHDSUPQqg33HlhCAM"
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
