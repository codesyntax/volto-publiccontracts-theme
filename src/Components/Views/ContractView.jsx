/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Image } from 'semantic-ui-react';
import {
  flattenToAppURL,
  flattenHTMLToAppURL,
  hasBlocksData,
} from '@plone/volto/helpers';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import SocialSharing from '@codesyntax/volto-social-sharing/SocialSharing';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
/**
 * ContractView view component class.
 * @function ContractView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const ContractView = ({ content }) => {
  let lang = useSelector((state) => state.intl.locale);
  moment.locale(lang);
  return (
    <Container className="view-wrapper grid">
      <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={10}>
          {content.title && (
            <h1 className="documentFirstHeading">{content.title}</h1>
          )}
          {content.effective && (
            <>
              <div className="effective-date">
                <span>Argitaratzen data</span>
                <br />
                {moment(content?.effective).format('LL')}
              </div>
            </>
          )}

          {content.file_number && (
            <>
              <div className="file-number">
                <span>Expediente zenbakia</span>
                <br />
                {content.file_number}
              </div>
            </>
          )}

          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
          {content.text && (
            <div
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(content.text.data),
              }}
            />
          )}
          {content.dates && (
            <>
              <h2>Datak</h2>
              <dl>
                {content.dates.items.map((date, index) => (
                  <>
                    <dt key={index}>{date.title}</dt>
                    <dd>{moment(date?.date).format('LL')}</dd>
                  </>
                ))}
              </dl>
            </>
          )}
          {content.items && (
            <>
              <h2>Fitxategiak</h2>
              <ul>
                {content.items.map((file, index) => (
                  <>
                    <li>
                      <Icon name="file pdf outline" size="mini" />
                      <UniversalLink href={`${file['@id']}/@@download/file`}>
                        {file.title}
                      </UniversalLink>
                    </li>
                  </>
                ))}
              </ul>
            </>
          )}
          {hasBlocksData(content) && <RenderBlocks content={content} />}
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid.Row>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ContractView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default ContractView;
