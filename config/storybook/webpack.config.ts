import webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  config.module!.rules = config.module!.rules!.map((rule) => {
    const ruleSet = rule as webpack.RuleSetRule;
    // eslint-disable-next-line
    if (/svg/.test(ruleSet.test as string)) {
      return {
        ...ruleSet,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });

  config.module!.rules.push(buildCssLoader(true));
  config.module!.rules.push(buildSvgLoader());

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );

  return config;
};
