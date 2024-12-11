import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginReact } from '@rsbuild/plugin-react';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginEslint({
      enable: true,
      eslintPluginOptions: {
        exclude: ['node_modules', 'dist'],
        cwd: __dirname,
        configType: 'flat',
      },
    }),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift('babel-plugin-react-compiler');
      },
    }),
  ],
  tools: {
    rspack(config, { appendPlugins }) {
      // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // plugin options
          }),
        );
      }
    },
  },
});
