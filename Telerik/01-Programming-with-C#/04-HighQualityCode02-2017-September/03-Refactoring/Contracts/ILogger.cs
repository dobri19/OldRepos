namespace GameFifteen.Contracts
{
    public interface ILogger
    {
        void WriteLine(string text = null);

        void Write(string text);
    }
}
