import './index.less'

interface ResizeBlockOptions {
  height?: string
  width?: string
  type?: 'horizontal' | 'vertical'
}
const resizeClassName = {
  row: {
    bar: 'h-[inherit] w-60 resize-x cursor-ew-resize',
    line: 'border-r-1',
    box: 'right-[4px] bottom-0 overflow-x-hidden'
  },
  col: {
    bar: 'w-[inherit] h-[inherit] min-h-30  resize-y cursor-ns-resize',
    line: 'w-full border-b-1',
    box: 'bottom-[4px] right-0 overflow-y-hidden'
  }
}

const ResizeBlock: React.FC<{ primary: React.FC, secondary: React.FC, options: ResizeBlockOptions }> = (props) => {
  const direction = props.options.type === 'vertical' ? 'col' : 'row'
  return (
    <div className={`h-full flex flex-${direction}`} data-attr={direction}>
      <div className='relative' style={direction === 'row' ? { height: props.options.height } : { width: props.options.width }}>
        <div className={`resize-bar ${resizeClassName[direction].bar}`}></div>
        <div className={`resize-line z--1 ${resizeClassName[direction].line}`}></div>
        <div className={`resize-box ${resizeClassName[direction].box}`}>
          <props.primary />
        </div>
      </div>
      <div className="flex-1 overflow-hidden" style={direction === 'row' ? { height: props.options.height } : { width: props.options.width }}>
        <props.secondary />
      </div>
    </div>
  )
}

export default ResizeBlock