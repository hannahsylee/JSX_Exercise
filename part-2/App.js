function App() {
    return (
        <div>
            <Tweet
            name="Hannah"
            username="hannal3"
            date={new Date().toDateString()}
            message="I don't care."
            />
            <Tweet
            name="Howard"
            username="howardy99"
            date={new Date().toDateString()}
            message="What's up."
            />
            <Tweet
            name="Andrew"
            username="andyr96"
            date={new Date().toDateString()}
            message="Hello."
            />
        </div>
    );
}