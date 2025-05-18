interface TextProsp {
  label: string;
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant: 'heading' | 'big-title' | 'base' | 'mini';
}

function Text(props: TextProsp) {
  const { label, tag = 'p', className, variant = 'base' } = props
  const Tag = tag
  return (
    <Tag className={`text ${variant ? variant : ''} ${className}`}> {label} </Tag>
  )
}

export default Text