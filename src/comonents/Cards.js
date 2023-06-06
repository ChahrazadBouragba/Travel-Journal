import path from "../img/Path.png"

export default function Cards(props) {
    return (
        <section>
            <div className="card--container">
                <img className="card--img">{props.imageUrl}</img>
                <div className="card--infoDiv">
                    <div className="Location">
                        <img className="card--path">{path}</img>
                        <p className="card--location">{props.location}</p>
                        <a className="location--link" href={props.googleMapsUrl}>View on Google Maps</a>
                    <h1>{props.title}</h1>
                    <b><p>{props.startDate} - {props.endDate}</p></b>
                    <p className="description">{props.description}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}