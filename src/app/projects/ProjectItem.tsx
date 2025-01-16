import { CldImage } from "next-cloudinary";

import { LinkButton } from "@/components/LinkButton";
import type { ProjectType } from "@/types/project";
import { formatDate } from "@/utils/dateFormatter";

interface ProjectItemProps {
  project: ProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
  const publishedDate = formatDate(project.publishedDate);

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <div className="media">
              {project.logoUrl && (
                <div className="media-left">
                  <figure className="image is-48x48">
                    <CldImage
                      src={project.logoUrl}
                      alt={`${project.name} project's logo`}
                      width={48}
                      height={48}
                      className="image is-48x48"
                    />
                  </figure>
                </div>
              )}
              <div className="media-content">
                <p className="title is-4">{project.name}</p>
                {project.publishedDate && (
                  <time
                    dateTime={project.publishedDate}
                    className="subtitle is-6"
                  >
                    {publishedDate}
                  </time>
                )}
                {!project.publishedDate && (
                  <p className="subtitle is-6">Not published yet</p>
                )}
              </div>
            </div>

            <div className="content">{project.description}</div>

            <div className="buttons">
              <LinkButton url={project.liveDemoUrl} text="Live Demo" />
              <LinkButton url={project.repositoryUrl} text="Source Code" />
            </div>

            <div className="tags">
              {project.techStack.map((technology) => (
                <span key={technology} className="tag">
                  #{technology}
                </span>
              ))}
            </div>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {project.demoMediaUrl && (
            <div className="column is-narrow">
              <div className="media" style={{ width: "256px" }}>
                <figure className="image is-256x256">
                  <CldImage
                    src={project.demoMediaUrl}
                    alt={`${project.name} project's demo media`}
                    width={256}
                    height={256}
                  />
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
