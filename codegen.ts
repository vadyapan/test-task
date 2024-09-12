import { CodegenConfig } from '@graphql-codegen/cli';
import { API_URL } from './src/constants/urls';

const config: CodegenConfig = {
  schema: API_URL,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/gql/documents/**/*.gql'],
  generates: {
    '.src/gql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
