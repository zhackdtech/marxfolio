type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Marxfolio",
    fullName: "Wilmarx John Cayabyab",
    email: "wilmarx.cayabyab@gmail.com",
  },
  hero: {
    name: "Wilmarx John",
    p: ["I am a Systems and Web Developer, as well as an Information Technology Personnel"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Wilmarx, an experienced IT, Systems, and Web Developer with a passion for crafting innovative solutions that streamline processes and enhance user experiences. With a strong background in software development, system administration, and web technologies, I thrive in dynamic environments where I can leverage my expertise to create robust and scalable solutions. Whether it's designing efficient systems, developing cutting-edge web applications, or optimizing IT infrastructure, I'm committed to delivering excellence and driving impactful results.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Featured Projects",
      h2: "Projects.",
      content: ` As a dedicated Web and System Developer, I specialize in conceptualizing, designing, and implementing innovative solutions that cater to both user experience and system efficiency. With a diverse portfolio of projects under my belt, I've had the privilege of crafting dynamic websites, scalable web applications, and robust system architectures. My expertise spans front-end development, back-end programming, database management, and system integration, allowing me to deliver comprehensive solutions that meet the unique needs of each project. From e-commerce platforms to enterprise-level systems, I bring a blend of creativity, technical proficiency, and problem-solving skills to every endeavor, ensuring optimal performance and user satisfaction.`,
    },
  },
};
