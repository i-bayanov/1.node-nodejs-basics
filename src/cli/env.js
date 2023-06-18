import { env } from 'process';

const parseEnv = () => {
  console.log(
    Object.entries(env)
      .filter(([key, _value]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`)
      .join('; ')
  );
};

parseEnv();
