function SocialButton(props) {
    return (
        <a href="#" className={`btn btn-social ${props.myclass}`} > {props.mytext}  </a>
    )
}

export default SocialButton