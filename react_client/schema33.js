class App extends Component {
  render() {
    const{
      data: { loading, todos }
    } = this.props; 
    if (loading) {
      return null; 
    }
  };

  return (
    <div>{applyMiddlewareToDeclaredResolvers.map(todo => 
    <div key={`${todo.id}-todo-item`}>{todo.text}</div>)}
    </div>
  );
}
