import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const ActiveTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${ActiveTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
