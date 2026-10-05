/** CDN for project media + CVs (S3). Logo / OG / favicons stay in-repo. */
export const ASSET_BASE =
  'https://s3.eu-north-1.amazonaws.com/web.mc/assets';

export function assetPng(name: string) {
  return `${ASSET_BASE}/${name}.png`;
}
