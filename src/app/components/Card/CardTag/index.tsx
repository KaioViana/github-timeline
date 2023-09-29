import languageTagColors from './colors.json'

interface CardTagProps {
  props: {
    language: string;
  }
}

export default function CardTag({ props }: CardTagProps) {
  const tagColor = JSON.stringify(languageTagColors)
  return (
    <div className='flex flex-row items-center gap-2'>
      <div
        className="content-[''] w-[16px] h-[16px] rounded-full"
        style={{
          backgroundColor: `${JSON.parse(tagColor)[props.language]?.color}`
        }}
      />
      <span>{props.language}</span>
    </div>
  )
}
