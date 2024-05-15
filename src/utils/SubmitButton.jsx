export const SubmitButton = ({ isLoading, onFocus, onBlur }) => (
  <button
    type="submit"
    className="btn"
    onBlur={onBlur}
    onFocus={onFocus}
    disabled={isLoading}
  >
    {isLoading ? "Sending..." : "Send Message"}
  </button>
);
