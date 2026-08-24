import WorkDetail from '@/components/WorkDetail';

export default function LittleEmperorsPage() {
  return (
    <WorkDetail
      slug="little-emperors"
      links={[{ labelKey: 'website', href: 'https://littleemperors.com/' }]}
    />
  );
}
